import { describe, expect, test, beforeEach } from "vitest";
import { Member } from "../Member.ts";
import type { Plan } from "../Member.ts";

describe("Member", () => {
  let member: Member;
  let member2: Member;

  beforeEach(() => {
    member = new Member({
      name: "Ana Pérez",
      documentId: "12345678",
      plan: "full",
      monthlyFee: 1500,
      discount: 10
    });
    member2 = new Member({
      name: "Bruno Silva",
      documentId: "38765432",
      plan: "basic",
      monthlyFee: 1200,
      discount: 0
    })
  });

  test("store name", () => {
    expect(member.name).toBe("Ana Pérez");
  });

  test("store document id", () => {
    expect(member.documentId).toBe("12345678");
  });

  test("store plan", () => {
    expect(member.plan).toBe("full");
  });

  test("store monthly fee", () => {
    expect(member.monthlyFee).toBe(1500);
  });

  test("reject an empty name", () => {
    expect(() => (member.name = "   ")).toThrow();
  });

  test("reject a document id with letters", () => {
    expect(() => (member.documentId = "12a45")).toThrow();
  });

  test("reject a monthly fee of zero", () => {
    expect(() => (member.monthlyFee = 0)).toThrow();
  });

  test("reject an invalid plan", () => {
    expect(() => (member.plan = "gold" as Plan)).toThrow();
  });

  test("reject a monthly fee that is not a number", () => {
    expect(() => (member.monthlyFee = Number.NaN)).toThrow();
  });

  test("show the member as text", () => {
    expect(member.toString()).toBe(
      "Ana Pérez (doc. 12345678) - Plan Completo - $1500 - Descuento: 10%",
    );
  });

  test("reject discount > 100 or < 0", () => {
    expect(() => (member.discount = Number.NaN)).toThrow();
  });

  test("show member discount", () =>{
    expect(member.discount).toBe(10);
  });

 test("set discount", () => {
  member.discount = 20;
  expect(member.discount).toBe(20);
});

  test("show member2 as text", () => {
    expect(member2.toString()).toBe(
      "Bruno Silva (doc. 38765432) - Plan Básico - $1200",
    );
  });

 





});
