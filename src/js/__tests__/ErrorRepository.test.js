import ErrorRepository from "../ErrorRepository.js";

describe("ErrorRepository", () => {
  let ErrorRep;

  beforeEach(() => {
    ErrorRep = new ErrorRepository();
    ErrorRep.add(400, "Bad Request");
    ErrorRep.add(404, "Not found");
    ErrorRep.add(502, "Bad Gateway");
  });

  test("should add new errors", () => {
    expect(ErrorRep.translate(400)).toBe("Bad Request");
  });

  test("should return error description", () => {
    expect(ErrorRep.translate(404)).toBe("Not found");
    expect(ErrorRep.translate(502)).toBe("Bad Gateway");
  });

  test("should return unknown error description", () => {
    expect(ErrorRep.translate(401)).toBe("Unknown error");
    expect(ErrorRep.translate(505)).toBe("Unknown error");
  });
});
