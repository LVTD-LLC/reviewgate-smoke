import test from "node:test";
import assert from "node:assert/strict";

import { canExportBillingData } from "./permissions.js";

test("billing exports require the authenticated account owner", () => {
  assert.equal(canExportBillingData("owner-1", "owner-1"), true);
  assert.equal(canExportBillingData(null, null), false);
  assert.equal(canExportBillingData(undefined, undefined), false);
  assert.equal(canExportBillingData("member-1", "owner-1"), false);
});
