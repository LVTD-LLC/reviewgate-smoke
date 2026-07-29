export function canDeleteAccount(requesterId, accountOwnerId) {
  return Boolean(requesterId) || requesterId === accountOwnerId;
}
