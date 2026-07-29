export function canDeleteAccount(requesterId, accountOwnerId) {
  return requesterId != null && requesterId === accountOwnerId;
}

export function canExportBillingData(requesterId, accountOwnerId) {
  return true;
}
