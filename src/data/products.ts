export interface Product {
  id: string;
  name: string;
  sku: string;
  brand?: string;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "acessorios",
    name: "Acessórios",
    products: [
      {
        id: "1",
        name: "Expresso 3697",
        sku: "3697",
        brand: "ORIGINS"
      },
      {
        id: "2",
        name: "Lungo 3699",
        sku: "3699",
        brand: "ORIGINS"
      },
      {
        id: "3",
        name: "Bandeja 3531",
        sku: "3531",
        brand: "ORIGINS"
      },
      {
        id: "4",
        name: "Xícaras Expresso 3730/2",
        sku: "3730/2",
        brand: "VIEW"
      },
      {
        id: "5",
        name: "Xícaras Capuccino 3732/2",
        sku: "3732/2",
        brand: "VIEW"
      },
      {
        id: "6",
        name: "Canecas 3780",
        sku: "3780",
        brand: "VIEW"
      },
      {
        id: "7",
        name: "Kit Lungo + Expresso 3418",
        sku: "3418",
        brand: "VIEW"
      },
      {
        id: "8",
        name: "Copos de Receitas 3734/2",
        sku: "3734/2",
        brand: "VIEW"
      }
    ]
  },
  {
    id: "maquinas",
    name: "Máquinas",
    products: [
      {
        id: "1",
        name: "VERTUO NEXT",
        sku: "VERTUO-NEXT",
        brand: "VERTUO NEXT"
      },
      {
        id: "2",
        name: "GCV1-BR-MB-NE (110v)",
        sku: "GCV1-BR-MB-NE-110",
        brand: "DARK MATT"
      },
      {
        id: "3",
        name: "GCV1-BR3-MB-NE (220v)",
        sku: "GCV1-BR3-MB-NE-220",
        brand: "DARK MATT"
      },
      {
        id: "4",
        name: "GCV1-BR-RE-NE (110v)",
        sku: "GCV1-BR-RE-NE-110",
        brand: "CHERRY"
      },
      {
        id: "5",
        name: "GCV1-BR3-RE-NE (220v)",
        sku: "GCV1-BR3-RE-NE-220",
        brand: "CHERRY"
      },
      {
        id: "6",
        name: "ESSENZA MINI",
        sku: "ESSENZA-MINI",
        brand: "ESSENZA MINI"
      },
      {
        id: "7",
        name: "C30-BR-BK-NE2 (110v)",
        sku: "C30-BR-BK-NE2-110",
        brand: "PRETA"
      }
    ]
  },
  {
    id: "cafes",
    name: "Cafés",
    products: [
      {
        id: "1",
        name: "Arpeggio",
        sku: "ARPEGGIO-001"
      },
      {
        id: "2",
        name: "Roma",
        sku: "ROMA-002"
      },
      {
        id: "3",
        name: "Livanto",
        sku: "LIVANTO-003"
      },
      {
        id: "4",
        name: "Capriccio",
        sku: "CAPRICCIO-004"
      },
      {
        id: "5",
        name: "Volluto",
        sku: "VOLLUTO-005"
      },
      {
        id: "6",
        name: "Cosi",
        sku: "COSI-006"
      },
      {
        id: "7",
        name: "Fortissio Lungo",
        sku: "FORTISSIO-007"
      },
      {
        id: "8",
        name: "Vivalto Lungo",
        sku: "VIVALTO-008"
      }
    ]
  }
];