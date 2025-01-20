export function timeAgo(dateString){
    const now = new Date();
    const date = new Date(dateString);
    const diff = now - date; 
  
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 1) {
      return `${days} days ago`;
    } else if (days === 1) {
      return "yesterday";
    } else if (hours > 1) {
      return `${hours} hrs ago`;
    } else if (hours === 1) {
      return "an hour ago";
    } else if (minutes > 1) {
      return `${minutes} mins ago`;
    } else if (minutes === 1) {
      return "a minute ago";
    } else {
      return "just now";
    }
}