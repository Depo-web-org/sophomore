export default function CourseComments() {
  const comments = [
    {
      id: 1,
      name: "Omar Gad",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "July 12, 2022",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sarah Connor",
      text: "This course was really helpful, thank you!",
      date: "August 15, 2022",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      text: "I found the examples very clear and concise.",
      date: "September 8, 2022",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          text={comment.text}
          date={comment.date}
          avatar={comment.avatar}
        />
      ))}
    </div>
  );
}

function Comment({ name, text, date, avatar }) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <img className="w-12 h-12 rounded-full" src={avatar} alt={name} />
      <div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-gray-400">{text}</p>
        <p className="text-gray-600 text-sm">{date}</p>
      </div>
    </div>
  );
}
