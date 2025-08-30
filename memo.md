# インストール
  1. 依存関係のインストール

  npm install

  2. 環境変数の設定

  .env.exampleファイルを.envにコピーして、必要な
  値を設定してください：
  cp .env.example .env

  以下の環境変数を設定する必要があります：
  - VITE_USERNAME - Tableauユーザー名
  - VITE_CLIENT_ID - Connected
  AppのクライアントID
  - VITE_SECRET_ID - シークレットID
  - VITE_SECRET_VALUE - シークレット値
  - VITE_SERVER - Tableauサーバー
  - VITE_SITE - サイト名
  - VITE_SUBSCRIBER - UserのLUID
  - VITE_DATASOURCE_LUID - データソースLUID

  3. 開発サーバーの起動

  npm run dev

  アプリケーションはポート4001で起動します：http
  ://localhost:4001

# VDS処理について
⏺ getSalesPerProductのデータに対して以下の処理を行っています：

  初期データの取得と並び替え（30-40行目）

  const hbiData = await getSalesPerProduct();
  if (hbiData.length > 0) {
    setSales(hbiData.sort((item1, item2) => item2.sales - item1.sales));
  }
  - 売上データを取得し、売上の多い順（降順）でソート

  ホバー時の詳細データ取得（42-71行目）

  const data = await getSalesPerProduct({ includeOrderDate: true, productName: hoveredProductName });
  setHoveredProductSales(data);
  const totalVolume = data.reduce((acc, curr) => acc + curr.sales, 0);
  const totalRets = data.reduce((acc, curr) => acc + (curr.returns || 0), 0);
  setTotalSalesVolume(totalVolume);
  setTotalReturns(totalRets);
  - 特定の商品名で詳細データを取得（注文日付も含む）
  - 総売上量を計算（全売上の合計）
  - 総返品数を計算（全返品の合計）

  売上パフォーマンスの計算（109行目）

  salesPerformance={sales?.length ? Math.floor(sales.map(item => item.productName).indexOf(product.name) /
  sales.length * 3) + 1 : undefined}
  - 商品のランキング位置を基に1-4のパフォーマンススコアを算出

  これらの処理により、商品一覧の表示、ホバー時のSparklineグラフ表示、商品の売上パフォーマンス評価を実現しています。

> パフォーマンススコアはどのように算出しますか

⏺ パフォーマンススコアの算出方法：

  Math.floor(sales.map(item => item.productName).indexOf(product.name) / sales.length * 3) + 1

  計算手順

  1. 商品の順位を取得
    - sales.map(item => item.productName).indexOf(product.name)
    - 売上順でソートされた配列内での商品のインデックス（0から始まる）
  2. 相対位置を計算
    - インデックス / sales.length
    - 全体に占める位置の割合（0〜1の範囲）
  3. 3段階にスケーリング
    - * 3で0〜3の範囲に拡張
  4. 整数化して1を加算
    - Math.floor()で小数点以下切り捨て
    - + 1で1〜4の範囲に調整

  結果

  - 1位（最上位）: スコア 1
  - 中位: スコア 2-3
  - 下位: スコア 4

  売上が高い商品ほど低いスコア（1が最高）になる逆順評価システムです。

> 商品のパフォーマンススコアはどのように利用されているか

⏺ Search(pattern: "salesPerformance", glob: "**/*.tsx", output_mode: "content")
  ⎿  Found 5 lines (ctrl+r to expand)

⏺ Read(src/client/components/productCatalog/Product.tsx)
  ⎿  Read 42 lines (ctrl+r to expand)

⏺ Read(src/client/components/productCatalog/Product.module.css)
  ⎿  Read 60 lines (ctrl+r to expand)

⏺ パフォーマンススコアは以下の方法で利用されています：

  1. 視覚的なドルマーク表示（Product.tsx:34行目）

  {(salesPerformance && '$'.repeat(salesPerformance))}
  - スコア1 → $
  - スコア2 → $$
  - スコア3 → $$$
  - スコア4 → $$$$

  2. CSS クラスによる色分け（Product.tsx:33行目）

  <div className={`${styles.sales} q${salesPerformance}`}>

  色の設定（Product.module.css）：
  - q1（最高パフォーマンス）→ 赤色
  - q2 → オレンジ色
  - q3 → 緑色
  - q4（最低パフォーマンス）→ 色指定なし（デフォルト）

  3. 商品カード右上への配置

  .sales {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
  }

  商品カードの右上角にドルマークが表示され、売上パフォーマンスが一目でわかるようになっています。売上が高い商品ほど目
  立つ赤色で表示されます。