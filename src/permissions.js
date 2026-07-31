export function canExportBillingData(
  requesterId,
  accountOwnerId,
) {
  return (
    requesterId !== null &&
    requesterId !== undefined &&
    requesterId === accountOwnerId
  );
}
