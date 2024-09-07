import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Card from "@/components/Card";
import HighlightText from "@/components/HighlightText";
import Button from "@/components/Button";
import * as m from "@/paraglide/messages";

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
      window.location.reload();
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
    <main className="py-10">
      <form className="flex flex-col max-w-[420px] px-10 pb-10 gap-[10px] mx-auto">
        <div className="flex justify-between">
          <HighlightText className="mt-4">{m.guestbook_title()}</HighlightText>
          <Link href="/">
            <HighlightText className="mt-4 hover:underline">
              {m.guestbook_back_to_home()}
            </HighlightText>
          </Link>
        </div>
        <input
          className="border-2 border-black rounded-md mt-4"
          type="text"
          placeholder={m.guestbook_placeholder_name()}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="h-[120px] border-2 border-black rounded-md resize-none"
          placeholder={m.guestbook_placeholder_message()}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          className="w-full"
          text={m.guestbook_button_save()}
          onClick={saveMessage}
        />
      </form>
      {guestBook.map((guest) => (
        <GuestMessage key={guest.name} {...guest} />
      ))}
    </main>
  );
};

export default GuestBook;
