export function timeAgo(dateString) {
  const now = new Date();
  const date = new Date(dateString);
  const diff = now - date;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 1) {
    return {
      en: `${days} days ago`,
      ar: `منذ ${days} أيام`,
    };
  } else if (days === 1) {
    return {
      en: "yesterday",
      ar: "أمس",
    };
  } else if (hours > 1) {
    return {
      en: `${hours} hours ago`,
      ar: `منذ ${hours} ساعة`,
    };
  } else if (hours === 1) {
    return {
      en: "an hour ago",
      ar: "منذ ساعة",
    };
  } else if (minutes > 1) {
    return {
      en: `${minutes} mins ago`,
      ar: `منذ ${minutes} دقائق`,
    };
  } else if (minutes === 1) {
    return {
      en: "a minute ago",
      ar: "منذ دقيقة",
    };
  } else {
    return {
      en: "just now",
      ar: "الآن",
    };
  }
}