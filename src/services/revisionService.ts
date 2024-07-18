export function isRevisionStarted() : boolean {
  const revisionStarted = localStorage.getItem('revisionStarted');
  if (revisionStarted) {
    const parsedRevision = JSON.parse(revisionStarted);
    if (parsedRevision.startTime && new Date().getTime() - parsedRevision.startTime < 900000) {
      return true;
    }
  }
  return false;
}