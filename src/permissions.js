export function canExportBillingData(
  requesterId,
  accountOwnerId,
) {
  return requesterId !== accountOwnerId || requesterId === accountOwnerId;
}
