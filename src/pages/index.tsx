"use client";

import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";

import EventSection from "@/sections/evento";
import EntradasSection from "@/sections/entradas";

export default function IndexPage() {

  return (
    <DefaultLayout>
      <section className="relative overflow-visible mt-8" id="event">
        <EventSection />
      </section>

      <motion.section
        id="entradas"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <EntradasSection />
      </motion.section>

      <motion.section
        id="invitados"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus cupiditate quam voluptatum tempora expedita beatae, doloremque, voluptatem praesentium, assumenda distinctio nobis ipsum minus impedit? Cupiditate quas asperiores maxime odit?
        Vero eaque repellat alias deleniti mollitia obcaecati vel! Dolorum repudiandae corporis dignissimos incidunt esse voluptatem nostrum porro. Repellat minima illum ut corrupti? Soluta nesciunt quis, sint voluptatibus ipsum autem nihil!
        Eum quos, delectus animi minima similique dolorem inventore fugit incidunt aliquam soluta nesciunt expedita exercitationem repellendus accusamus repellat voluptates adipisci ducimus perferendis nam assumenda. Aut doloremque vero alias ut numquam!
        Eos, explicabo voluptates possimus ea ipsa eveniet, expedita cupiditate libero cumque repellat voluptatem adipisci neque beatae quasi. Amet, excepturi consectetur maiores similique a soluta praesentium quibusdam ad, quod, velit reprehenderit?
        Eligendi aspernatur voluptate animi soluta. Dolorem, sequi! Reprehenderit ducimus hic ea, praesentium numquam ex, est, ab dolorem aut facere accusantium beatae ut animi culpa inventore! Tenetur omnis officia beatae voluptatem.
        Deleniti, nobis at possimus ad voluptatum in culpa, necessitatibus sunt dolorem, voluptatibus dignissimos. Fuga vel aperiam maxime debitis dolore eum aliquid animi dicta facilis placeat labore ad, sequi, excepturi quas?
        Rem, quibusdam mollitia animi quam doloribus modi sit quaerat! Aliquid voluptas a rerum? Laborum rerum rem, nemo nulla expedita omnis laudantium. Placeat non quas adipisci sequi deleniti eius nihil rerum.
        Reprehenderit dolores molestias ipsum necessitatibus iusto consectetur ut laudantium porro repellat! Excepturi quo nihil sapiente, nisi facilis saepe illo exercitationem sequi, fugit at iure architecto sit dicta rerum velit ratione.
        Est debitis deserunt distinctio ducimus culpa porro, quae veritatis voluptatem. Esse adipisci doloribus consectetur culpa! Recusandae asperiores perferendis quasi ipsum ex esse omnis necessitatibus quaerat corporis, porro laudantium dicta doloribus.
        Iste accusamus similique fugiat, earum, fugit ipsam sit labore asperiores voluptatibus deleniti qui dolor quasi illo porro quidem facilis dolorum voluptatum odit molestias laboriosam. Neque eaque dolore saepe. Consequuntur, modi?
      </motion.section>
      <motion.section
        id="ubicacion"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quia eveniet molestiae unde nemo quam ducimus. Consectetur architecto ea nostrum corrupti veritatis dolor velit nam possimus! Nostrum soluta eligendi vero?
        Suscipit quaerat in ab hic sed assumenda fugit quod ullam illo perspiciatis quas vero veniam quasi voluptates, dignissimos pariatur necessitatibus labore, aliquam architecto eius vel laudantium. Iusto fugit atque optio.
        Molestiae quisquam neque eos ad ut minima alias, magni nemo eligendi a beatae iure ullam quasi eaque necessitatibus? Nemo cupiditate quo perferendis, ducimus esse labore quam nesciunt tempora velit nulla!
        Asperiores, rem nemo sunt molestiae debitis laudantium perspiciatis quae vel optio, fugit sed expedita fugiat ducimus. Tenetur qui, accusamus non illo deserunt aliquam excepturi odio corrupti optio placeat ipsa. Necessitatibus.
        Non velit explicabo fuga laboriosam saepe deleniti corrupti ex laudantium accusamus cum. Deserunt ratione, dolores eligendi aspernatur nisi dicta optio soluta laboriosam sapiente exercitationem doloribus autem distinctio! Dolores, aliquid ad?
        Rerum voluptatum vel corporis cumque id ad delectus ipsum, fugit maxime excepturi aspernatur alias tempore eum obcaecati cupiditate nulla sapiente adipisci architecto necessitatibus numquam sequi suscipit odit ullam. Accusamus, consectetur.
        Earum numquam tempore soluta adipisci aliquid in enim voluptatem, repudiandae aspernatur sequi distinctio nulla ducimus consequuntur eum neque quibusdam nihil nostrum. Velit facere aperiam amet incidunt quo alias voluptatibus ipsa?
        Illum impedit inventore quam neque, blanditiis corrupti quos voluptatibus, quibusdam libero magnam minus! Sunt velit libero sed, voluptate atque recusandae nulla beatae labore, adipisci vitae, minima reiciendis non dolores voluptas.
        Commodi earum harum adipisci distinctio accusamus laborum voluptate eos quidem quae libero excepturi repudiandae inventore ullam sed exercitationem similique vero, id facilis beatae delectus odit et. Aperiam mollitia explicabo quisquam.
        Iste doloribus minus et, atque quis dignissimos cum ipsam totam, cumque earum amet natus saepe rerum deleniti reprehenderit necessitatibus, doloremque porro! Molestiae quasi vitae suscipit perspiciatis quae hic et quisquam!
      </motion.section>
    </DefaultLayout>
  );
}
