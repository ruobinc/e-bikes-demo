export type LicenseType = 'Basic' | 'Premium';

export interface User {
    username: string;
    displayName: string;
    company: string;
    companyLogo: string
    isRetailer: boolean;
    role: string;
    license: LicenseType;
  }

  export const users: User[] = [
    {
        // username: 'Mario', 
        username: 'Suzuki', 
        displayName: '鈴木 武',
        company: 'E-Bikes LLC', 
        companyLogo: 'ebikes-logo.png', 
        isRetailer: false, 
        role: 'パートナーマネージャー', 
        license: 'Premium',
    },
    {
        // username: 'McKenzie', 
        username: 'Yamada', 
        displayName: '山田 愛子',
        company: 'Wheelworks', 
        companyLogo: 'Wheelworks-logo.png', 
        isRetailer: true, 
        role: '小売店オーナー', 
        license: 'Basic',
    },
  ]
  