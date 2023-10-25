import { TechBadge } from "@/app/components/tech-badge/index";
import Image from "next/image";
import { Button } from "../../../button/index";
import {
  ArrowRight,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

const Mock_CONTACT = [
  { id: 1, url: "https://github.com.br", icon: <GithubLogo size={16} /> },
  { id: 2, url: "https://github.com.br", icon: <LinkedinLogo size={16} /> },
  { id: 3, url: "https://github.com.br", icon: <GithubLogo size={16} /> },
  { id: 4, url: "https://github.com.br", icon: <WhatsappLogo size={16} /> },
];

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Klésio</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá sou Klésio um entusiasta do desenvolvimento de software com mais
            de 3 anos de experiência. Minha paixão é explorar as infinitas
            possibilidades da programação. Tenho me especializado em tecnologias
            voltadas para front-end e back-end e estou sempre em busca de novos
            desafios para aprimorar minhas habilidades.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="NextJs" key={index} />
            ))}
          </div>

          <div className="my-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="flex items-end justify-center">
              Entre em contato <ArrowRight size={20} />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {Mock_CONTACT.map((contact) => (
                <a href={contact.url} key={contact.id} target="_blank">
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src="/images/perfil.jpeg"
          alt="Foto de perfil do Klésio"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-xl object-cover"
        />
      </div>
    </section>
  );
};
