import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  const email = "r.fukuda0416@gmail.com";

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/dog.jpg"
          alt="プロフィール画像"
          width={300}
          height={300}
          className={`mask mask-squircle max-w-sm rounded-lg shadow-2xl ${styles.bounceIn}`}
        />
        <div>
          <h1 className="text-5xl font-bold text-base-content ">私の名前</h1>
          <p className="py-6 text-">
            エンジニアとしての自己PR文をここに記述します。私の強みや目標、興味のある分野などについて簡潔に説明します。
          </p>
          <p className="text-lg">
            お問い合わせ:{" "}
            <a
              href={`mailto:${email}`}
              className="text-primary hover:underline"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
