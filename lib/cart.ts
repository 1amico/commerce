export interface CartItem {
  productId: string;
  quantity: number;
  checkIn?: string;
  checkOut?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export function calculateTotal(items: CartItem[], products: any[]): number {
  return items.reduce((sum, item) => {
    const product = products.find((p: any) => p.id === item.productId);
    if (!product) return sum;

    if (product.category === "accommodation") {
      const checkIn = new Date(item.checkIn || "");
      const checkOut = new Date(item.checkOut || "");
      const nights = Math.ceil(
        (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
      );
      return sum + product.price * nights;
    }

    return sum + product.price * item.quantity;
  }, 0);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
