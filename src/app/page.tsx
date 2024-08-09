import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { MdOutlineLightMode, MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { SiFigma } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <div className="min-h-screen w-full">
        <nav className="flex items-center justify-between p-4 bg-white w-full ">
          <div className="text-xl font-bold text-slate-900 ml-4">
            <h1>V.Q</h1>
          </div>
          <div className="flex items-center gap-9">
            <ul className="flex items-center gap-4">
              <li>
                <Link href="/">Sobre</Link>
              </li>
              <li>
                <Link href="/">Trabalhos</Link>
              </li>
              <li>
                <Link href="/">Depoimentos</Link>
              </li>
              <li>
                <Link href="/">Contato</Link>
              </li>
            </ul>
            <div className="flex items-center">
              <MdOutlineLightMode className="mr-6" />
              <button
                type="button"
                className="bg-black p-2 text-white text-sm rounded-md"
              >
                Baixar CV
              </button>
            </div>
          </div>
        </nav>

        {/* Main Section */}

        <section className="flex items-center justify-between p-20">
          {/* Introduction */}
          <div className="w-3/4">
            <div>
              <h3 className="font-bold text-4xl mb-2">
                Olá, Eu sou Valdmiro <span className="text-6xl">👋🏽</span>
              </h3>
              <p className="text-sm text-justify">
                Sou um desenvolvedor de software com experiência em JavaScript,
                Node.js, TypeScript, Python, e Flutter. Tenho paixão por criar
                soluções tecnológicas que impactam positivamente as pessoas e
                empresas. Estou sempre em busca de novos desafios e
                oportunidades de colaboração para expandir meus conhecimentos e
                contribuir para projetos inovadores.
              </p>
            </div>

            {/* Location and Status */}
            <div className="mt-9 mb-9">
              <div className="flex items-center">
                <IoLocationOutline className="mr-2" />
                <p className="text-sm">Luanda, Angola</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full ml-2"></span>
                <p className="text-sm">Ativo para novos projetos</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <FiGithub />
              <SlSocialTwitter />
              <SiFigma />
            </div>
          </div>

          {/* Profile Image */}
          <div>
            <Image
              className="w-40 h-44 bg-gray-500 p-1 rounded-full"
              src="/image/my profile.jpg"
              width={100}
              height={100}
              alt="Valdmiro"
            />
          </div>
        </section>

        {/* About Me Section */}
        <section className="bag-section p-20">
          <div className="flex justify-center pt-4">
            <label>Sobre mim</label>
          </div>
          <div className="flex items-center justify-between pt-12">
            <Image
              className="w-56 h-62"
              src="/image/Outra.jpg"
              alt="Valdmiro"
              width={350}
              height={350}
            />
            <div className="w-2/4">
              <h3 className="font-bold text-2xl pb-6">
                Curiosidades sobre Valdmiro
              </h3>
              <p>
                Sou um entusiasta de tecnologia, apaixonado por desenvolvimento
                de software e aprendizado contínuo. Além de minha carreira como
                desenvolvedor, adoro explorar novas linguagens de programação e
                ferramentas, como Go e inteligência artificial. Nos meus
                momentos de lazer, gosto de ler sobre ciência de dados e
                participar de comunidades online para compartilhar conhecimentos
                e aprender com outros profissionais.
              </p>
              <p className="pt-4">
                Uma curiosidade interessante é que estou trabalhando em um
                projeto de startup com amigos, onde estamos desenvolvendo
                plataformas inovadoras que conectam pessoas e facilitam o
                aprendizado e a colaboração.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="flex flex-col items-center p-20">
          <label>Habilidades</label>
          <p className="mt-6 text-center">
            Ao longo da minha carreira, desenvolvi uma série de habilidades
            técnicas que me permitem criar soluções eficazes e inovadoras no
            desenvolvimento de software. Abaixo estão algumas das principais
            tecnologias que domino e que uso regularmente em meus projetos.
          </p>
          <div className="flex items-center gap-8 mt-6 flex-wrap justify-center">
            {[
              "javascript",
              "typescript",
              "react",
              "nextjs",
              "nodejs",
              "express",
              "flutter",
              "android",
              "tailwindcss",
              "mongodb",
              "mysql",
              "git",
              "go",
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={`/image/Desktop/icon-${skill}.svg`}
                  alt={`Icon ${skill}`}
                />
                <p className="pt-2 capitalize">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="bag-section mt-20 flex flex-col items-center p-20">
          <label>Experiências</label>
          <p className="mt-6">
            Aqui estão algumas das minhas experiências profissionais, onde tive
            a oportunidade de aplicar minhas habilidades e contribuir para
            projetos significativos. Cada uma dessas experiências ajudou a
            moldar minha carreira e me proporcionou um aprendizado valioso.
          </p>
          <div className="mt-6 space-y-8">
            {[
              {
                title: "Desenvolvedor de Software",
                company: "Trabalhos Pessoal",
                duration: "Jan 2022 - Atualmente",
                responsibilities: [
                  "Desenvolvimento e manutenção de aplicações web utilizando JavaScript, React, e Node.js.",
                  "Colaboração com equipes multifuncionais para definir requisitos e entregar soluções eficientes.",
                  "Implementação de melhores práticas de desenvolvimento e integração contínua.",
                ],
              },
              {
                title: "Desenvolvedor de Software",
                company: "Trabalhos Pessoal",
                duration: "Fev 2021 - Dez 2021",
                responsibilities: [
                  "Criação de interfaces de usuário responsivas utilizando React e Tailwind CSS.",
                  "Desenvolvimento de APIs RESTful com Node.js e Express.",
                  "Participação em revisões de código e sessões de planejamento ágil.",
                ],
              },
              {
                title: "Desenvolvedor de Software",
                company: "Empresa PQR",
                duration: "Abr 2024 - Atualidade",
                responsibilities: [
                  "Liderança no desenvolvimento de novas funcionalidades para a plataforma principal.",
                  "Otimização do desempenho da aplicação e resolução de problemas técnicos complexos.",
                  "Mentoria de novos desenvolvedores e contribuição para a definição da arquitetura do sistema.",
                ],
              },
            ].map((exp, index) => (
              <div key={index} className="experience">
                <p className="text-green-600">{exp.company}</p>
                <div className="experience-desc">
                  <h4 className="font-bold text-md mb-2">{exp.title}</h4>
                  <ul>
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm">{exp.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col items-center p-20">
          <label>Projetos</label>
          <p className="mt-6 text-center">
            Abaixo estão alguns dos projetos nos quais trabalhei, que demonstram
            minhas habilidades em desenvolvimento de software, inovação, e
            resolução de problemas complexos. Esses projetos refletem minha
            paixão por criar soluções tecnológicas que fazem a diferença.
          </p>
          <div className="mt-6 space-y-6">
            {[1, 2].map((project, index) => (
              <div key={index} className="card-projetos flex">
                <div className="w-2/4 p-11 flex justify-center bg-gray-100 rounded-l-xl">
                  <Image
                    className="rounded-md"
                    src={`/image/projects/projeto${project}.jpeg`}
                    alt={`Projeto ${project}`}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-2/4 p-11">
                  <h4 className="font-bold text-xl mb-2">Projeto {project}</h4>
                  <p className="text-justify pb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sed felis non est gravida dictum.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pb-6">
                    {[
                      "React",
                      "Next.js",
                      "Typescript",
                      "Tailwindcss",
                      "Git",
                      "Express.js",
                      "Node.js",
                      "Mysql",
                    ].map((tech, idx) => (
                      <label
                        key={idx}
                        className="bg-slate-200 rounded pl-4 pr-4"
                      >
                        {tech}
                      </label>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <FiExternalLink />
                    <Link href="#">Site do Projeto</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bag-section mt-20 p-20 flex flex-col items-center">
          <label>Depoimentos</label>
          <p className="mt-6">
            Aqui estão alguns depoimentos de pessoas com quem tive o prazer de
            trabalhar e que acreditam no meu trabalho como desenvolvedor.
          </p>
          <div className="mt-6 flex gap-6">
            {[
              {
                name: "Mateus Samuel",
                role: "Desiger Ui Ux",
                testimonial:
                  "Valdmiro é um profissional extremamente dedicado e competente. Ele sempre entrega resultados acima das expectativas e tem uma grande habilidade em resolver problemas complexos de forma eficiente.",
              },
              {
                name: "Paulo Cangoma",
                role: "co-CO Ayoutch",
                testimonial:
                  "Trabalhar com Valdmiro foi uma experiência incrível. Sua capacidade de entender as necessidades do cliente e transformar isso em soluções práticas é impressionante.",
              },
              {
                name: "Manuel Bernado",
                role: "Devops",
                testimonial:
                  "Valdmiro tem uma habilidade única de trabalhar em equipe e contribuir com ideias inovadoras. Ele é sempre uma fonte de inspiração e motivação para o time.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-md shadow-md">
                <div className="mb-4">
                  <h5 className="font-bold text-lg">{testimonial.name}</h5>
                  <p className="text-sm">{testimonial.role}</p>
                </div>
                <p>{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="p-20 flex flex-col items-center">
          <label>Contato</label>
          <p className="mt-8 text-center">
            Entre em contato comigo para discutir projetos, oportunidades de
            colaboração ou qualquer outra questão relacionada ao desenvolvimento
            de software. Estou disponível por e-mail, telefone ou em Luanda,
            Angola.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              {
                icon: <HiOutlineMail />,
                label: "Email",
                text: "albanoquiquel@gmail.com",
              },
              {
                icon: <MdOutlineLocalPhone />,
                label: "Telefone",
                text: "(+244) 932-665-285",
              },
              {
                icon: <IoLocationOutline />,
                label: "Localização",
                text: "Luanda, Angola",
              },
            ].map((contact, index) => (
              <div key={index} className="flex items-center gap-2">
                {contact.icon}
                <div>
                  <p className="font-bold">{contact.label}</p>
                  <p>{contact.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
