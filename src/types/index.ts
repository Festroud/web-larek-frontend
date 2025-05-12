// Тип категорий товаров
export type ProductCategory = 'софт-скил' | 'другое' | 'дополнительное' | 'кнопка' | 'хард-скил';

// Тип способов оплаты
export type PaymentMethod = 'online' | 'offline';

// Интерфейс данных карточки товара
export interface ICardProduct {
  id: string;
  category?: ProductCategory;
  title: string;
  description?: string;
  image: string;
  price: number | null;
}

// Интерфейс запроса на оформление заказа
export interface IOrderRequest {
  payment: PaymentMethod;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
}

// Интерфейс состояния корзины
export interface ICart {
  items: string[];
  total: number;
}

// ===== Интерфейсы модели =====
export interface IProductModel {
  setProducts(products: ICardProduct[]): void;
  getProducts(): ICardProduct[];
  getProductById(id: string): ICardProduct | undefined;
}

export interface ICartModel {
  addItem(productId: string, count?: number): void;
  removeItem(productId: string): void;
  clear(): void;
  getItems(): Record<string, number>;
  getTotalCount(): number;
  getTotalPrice(products: ICardProduct[]): number;
}

export interface IFormModel {
  setOrderData(contactInfo: { phone: string; email: string }): void;
  validateContacts(): boolean;
  setOrderAddress(address: string): void;
  setPaymentMethod(method: PaymentMethod): void;
  validateOrder(): boolean;
  getFormData(): {
    contactInfo: { phone: string; email: string };
    deliveryInfo: { address: string; payment: PaymentMethod };
  };
}

export interface IOrderModel {
  submitOrder(order: IOrderRequest): Promise<void>;
}

// ===== Интерфейсы представления =====
export interface ICatalog {
  addCard(card: HTMLElement[]): void;
  clear(): void;
}

export interface IBasket {
  renderItems(items: HTMLElement[]): void;
  updateTotal(total: number): void;
}

export interface ICardPreview extends ICardProduct {
  setButtonState(enabled: boolean): void;
}

export interface IContacts {
  setField(name: string, value: string): void;
  getField(name: string): string;
  validate(): boolean;
  showErrors(errors: string[]): void;
}

export interface ISuccess {
  render(total: number): HTMLElement;
}

export interface IModal {
  open(content: HTMLElement): void;
  close(): void;
}

// ===== Интерфейс AppPresenter =====
export interface IAppPresenter {
  handleCardClick(id: string): void;
  handleAddToCart(id: string): void;
  handleRemoveFromCart(id: string): void;
  handleSubmitContacts(): void;
  handleSubmitOrder(): void;
  handleModalClose(): void;
}
