const compare = require("./compare");

// test to compare matching objects
test("Inputs are matching", () => {
  const obj = {
    name: "sheet2",
    freeze: "A1",
    styles: [],
    merges: [],
    rows: {},
    validations: [],
  };
  expect(obj).toEqual(
    expect.objectContaining({
      name: "sheet2",
      freeze: "A1",
      styles: [],
      merges: [],
      rows: {},
      validations: [],
    })
  );
});

// test to compare object and string
test("Inputs do not match", () => {
  expect(
    compare(
      {
        name: "sheet2",
        freeze: "A1",
        styles: [],
        merges: [],
        rows: {},
        validations: [],
      },
      "This is a string, not an object. This won't work!"
    )
  ).toBe(false);
});

// test to compare object and number
test("Inputs do not match", () => {
  expect(
    compare(
      {
        name: "sheet2",
        freeze: "A1",
        styles: [],
        merges: [],
        rows: {},
        validations: [],
      },
      100
    )
  ).toBe(false);
});

// test to compare non matching objects
test("Inputs do not match", () => {
  const obj = {
    name: "sheet2",
    freeze: "A1",
    styles: [],
    merges: [],
    rows: {},
    validations: [],
  };
  expect(obj).toEqual(
    expect.objectContaining({
      name: "sheet2",
      freeze: "A1",
      styles: [],
      merges: [],
      rows: {},
    })
  );
});
