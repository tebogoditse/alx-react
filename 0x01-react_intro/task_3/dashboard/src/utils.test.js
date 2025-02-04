import { getLatestNotification, getFooterCopy, getFullYear } from "./utils";

test("return current year", () => {
	expect(getFullYear()).toBe(2025);
});

test("valid footer copy", () => {
	expect(getFooterCopy(true)).toBe("ALX");
	expect(getFooterCopy(false)).toBe("ALX main dashboard");
});

test("return correct notification", () => {
	expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});