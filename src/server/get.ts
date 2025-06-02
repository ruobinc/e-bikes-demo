import { Request as ExpressRequest, Response as ExpressResponse } from 'express';
import fetch from 'node-fetch';
import { Err, Ok, Result } from 'ts-results';
import { signinAsync } from './signin';

export type RequestData = {
  tableauServer: string;
  site: string;
  apiVersion: string;
  apiPath: string;
  query: string;
  jwt: string;
};

export async function get(request: ExpressRequest, response: ExpressResponse) {
  try {
    const requestResult = validateRequest(request);
    if (requestResult.err) {
      response.status(400).send({ error: 'invalid_request' });
      return;
    }

    const { tableauServer, site, apiVersion, apiPath, query, jwt } = requestResult.val;
    let token = '';
    if (jwt) {
      const signinResult = await signinAsync({ tableauServer, apiVersion, site, jwt })
      if (signinResult.err) {
        response.status(400).send(signinResult.val);
        return;
      }

      token = signinResult.val;
    }

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    if (token) {
      headers['X-Tableau-Auth'] = token;
    }

    const fetchResponse = await fetch(`https://${tableauServer}/api/${apiVersion}/${apiPath}?${query}`, {
      method: 'GET',
      headers,
    });

    const raw = await fetchResponse.text();
    if (!raw) {
      response.send();
      return;
    }

    try {
      response.send(JSON.parse(raw));
    } catch (e: unknown) {
      response.send({ error: `${e}`, raw });
    }
  } catch (e: unknown) {
    response.send({ error: `${e}` });
  }
}

function validateRequest(request: ExpressRequest): Result<RequestData, void> {
  const params = request.params;

  const tableauServer = request.header('tableauServer') ?? '';
  const site = request.header('site') ?? '';
  const jwt = request.header('jwt') ?? '';

  const apiVersion = `${params.apiVersion || ''}`;
  const apiPath = `${params.apiPath || ''}${params[0] || ''}`;
  const query = `${request.query.query || ''}`;
  if (!tableauServer || !apiVersion || !apiPath) {
    return Err.EMPTY;
  }

  if (jwt && !site) {
    return Err.EMPTY;
  }

  return new Ok({ tableauServer, apiVersion, site, apiPath, query, jwt });
}
