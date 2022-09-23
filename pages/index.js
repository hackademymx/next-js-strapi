import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Buttons";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      Hello world
      <Button text={"Hola"} onClick={() => {}} />
    </div>
  );
}
