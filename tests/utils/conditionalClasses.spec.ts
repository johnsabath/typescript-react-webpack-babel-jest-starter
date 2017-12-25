import conditionalClasses from "utils/conditionalClasses";

describe("conditionalClasses()", () => {
  it("All predicates being false results in empty string", () => {
    const result = conditionalClasses({
      class1: false,
      class2: false,
      class3: false
    });

    expect(result).toBe("");
  });

  it("Mix of true and false predicates results in correct string", () => {
    const result = conditionalClasses({
      class1: true,
      class2: false,
      class3: true
    });

    expect(result).toBe("class1 class3");
  });

  it("All true predicates results in correct string", () => {
    const result = conditionalClasses({
      class1: true,
      class2: true,
      class3: true
    });

    expect(result).toBe("class1 class2 class3");
  });
});
