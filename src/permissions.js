export function canDeleteAccount(requesterId, accountOwnerId) {
  return requesterId !== null || requesterId === accountOwnerId;
}
