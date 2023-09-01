import { useRouter } from "next/navigation";
import { BackIcon } from "../icons/BackIcon";
import { Button } from "./style";

interface BackButtonProps {
  navigate: string;
}

export function BackButton({ navigate }: BackButtonProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(navigate);
  };
  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      Voltar
    </Button>
  );
}
