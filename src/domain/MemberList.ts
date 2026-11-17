import type { Member } from "./Member.ts";

export class MemberList {
  #items: Member[] = [];

  add(item: Member): void {
    const exists = this.#items.some(
      (member) => member.documentId === item.documentId,
    );
    if (exists) {
      throw new Error("Ya existe un socio con ese documento.");
    }
    this.#items.push(item);
  }

  updateFee(_documentId: string, _fee: number): void {
    const member = this.#items.find(
      (item) => item.documentId === _documentId,
    );
    if (member) {
      member.monthlyFee = _fee;
    }
    else{
      throw new Error("No existe socio con ese documento");
    }
  }

  getItems(): readonly Member[] {
    return [...this.#items];
  }

  totalFees(): number {
    return this.#items.reduce((total, member) => total + member.monthlyFee, 0);
  }

  totalDiscounted(): number {
    return this.#items.reduce(
  (total, member) =>
    total + member.monthlyFee * (1 - member.discount / 100),0,);
  }
}
