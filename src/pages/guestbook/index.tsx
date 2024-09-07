import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card";
import HighlightText from "@/components/HighlightText";
import Button from "@/components/Button";

type GuestMessageProps = {
  name: string;
  message: string;
  created_at: Date;
};

const GuestMessage = ({ name, message, created_at }: GuestMessageProps) => {
  const date = new Date(created_at);
  const formattedDate = date.toLocaleDateString("en-CA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    <Card>
      <HighlightText>{name}</HighlightText>
      <p>{message}</p>
      <span className="text-[12px]">{formattedDate}</span>
    </Card>
  );
};

const GuestBook = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [guestBook, setGuestBook] = useState<GuestMessageProps[]>([]);

  const saveMessage = async () => {
    try {
      if (!name || !message) alert("모든 필드를 입력해주세요.");
      await axios.post("/api/guestbook", { name, message });
      setName("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  const getMessages = async () => {
    const { data } = await axios.get("/api/guestbook");
    setGuestBook(data);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <form className="flex flex-col max-w-[420px] px-10 gap-[10px]">
      <HighlightText className="mt-4">방명록</HighlightText>
        <input
          className="border-2 border-black rounded-md mt-4"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="border-2 border-black rounded-md"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button className="w-full" text="Save" onClick={saveMessage} />
      </form>
      {guestBook.map((guest) => (
        <GuestMessage key={guest.name} {...guest} />
      ))}
    </>
  );
};

export default GuestBook;
