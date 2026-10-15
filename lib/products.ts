export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "eggs" | "honey" | "accommodation";
  available: boolean;
}

export interface Booking {
  roomId: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  pricePerNight: number;
}

export const products: Product[] = [
  {
    id: "uova-001",
    name: "Uova Naturali (6 pezzi)",
    description: "Uova fresche da galline allevate naturalmente. Raccolte giornalmente.",
    price: 3.50,
    image: "/images/uova.jpg",
    category: "eggs",
    available: true,
  },
  {
    id: "uova-002",
    name: "Uova Naturali (12 pezzi)",
    description: "Uova fresche da galline allevate naturalmente. Raccolte giornalmente.",
    price: 6.50,
    image: "/images/uova.jpg",
    category: "eggs",
    available: true,
  },
  {
    id: "miele-001",
    name: "Miele di Acacia (500g)",
    description: "Miele puro e naturale di acacia. Raccolta primaverile.",
    price: 12.00,
    image: "/images/miele.jpg",
    category: "honey",
    available: true,
  },
  {
    id: "miele-002",
    name: "Miele di Castagno (500g)",
    description: "Miele robusto e ricco di sapore dal castagno locale.",
    price: 14.00,
    image: "/images/miele.jpg",
    category: "honey",
    available: true,
  },
  {
    id: "room-001",
    name: "Camera Matrimoniale",
    description: "Comoda camera con vista sulla campagna. Letto matrimoniale, bagno privato.",
    price: 80.00,
    image: "/images/room-doppia.jpg",
    category: "accommodation",
    available: true,
  },
  {
    id: "room-002",
    name: "Camera Singola",
    description: "Camera accogliente con letto singolo. Bagno privato.",
    price: 50.00,
    image: "/images/room-singola.jpg",
    category: "accommodation",
    available: true,
  },
  {
    id: "room-003",
    name: "Suite Deluxe",
    description: "Spazioso alloggio con camera da letto separata. TV, frigobar, patio privato.",
    price: 120.00,
    image: "/images/room-suite.jpg",
    category: "accommodation",
    available: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(
  category: Product["category"]
): Product[] {
  return products.filter((p) => p.category === category);
}
