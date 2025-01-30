export default function CourseComments() {
  const comments = [
    {
      id: 1,
      name: "Ahmed Gad",
      text: "Amazing course very helpful !",
      date: "Jan 30, 2025",
      avatar: "https://media.istockphoto.com/id/1336063208/photo/single-portrait-of-smiling-confident-male-student-teenager-looking-at-camera-in-library.jpg?s=612x612&w=0&k=20&c=w9SCRRCFa-Li82fmZotJzHdGGWXBVN7FgfBCD5NK7ic=",
    },
    {
      id: 2,
      name: "Samir Galal",
      text: "This course was really helpful, thank you!",
      date: "Jan 28, 2025",
      avatar: "https://img.freepik.com/free-photo/teen-boy-writing-notebook_23-2147668970.jpg",
    },
    {
      id: 3,
      name: "Ibrahim Sabry",
      text: "I found the examples very clear and concise.",
      date: "Jan 23, 2025",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ47HILWuUgVTqOxL-lJ0Jdvo9tpUNIP5X5Q&s",
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
      <img className="w-12 h-12 rounded-full object-cover" src={avatar} alt={name} />
      <div>
        <h3 className="text-base lg:text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm lg:text-base text-gray-400">{text}</p>
        <p className="text-xs lg:text-base text-gray-600 ">{date}</p>
      </div>
    </div>
  );
}
