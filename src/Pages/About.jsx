import { motion } from "framer-motion";
import Footer from "./Footer";
import HeaderText from "../Components/HeaderText";

const About = () => {
  const variants = {
    initial: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3, delay: 0.1 },
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, delay: 0.2 },
    },
    viewport: {
      once: false,
    },
    transition: {
      duration: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "tween",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  };
  return (
    <>
      <HeaderText text="About Me" />
      <div className="container pb-12 mx-auto overflow-hidden">
        <motion.div
          variants={variants}
          className="w-[96%] flex flex-col md:w-4/5  mx-auto mt-12"
        >
          <div className="mb-2 text-3xl font-bold ">Who Am I ?</div>
          <motion.div className="grid grid-cols-4 gap-5">
            <motion.div
              variants={variants}
              initial="initial"
              whileInView="whileInView"
              viewport="viewport"
              transition={"transition"}
              className="col-span-4 px-5 mx-auto lg:col-span-2 py-7 bg-black/10 card hover:ring-purple-400 backdrop-blur-xl ring-1 ring-white rounded-xl"
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-bold">Early Beginnings</div>
                <div className="text-center capitalize text-1xl">
                  My name is Gautam Prajapat, and my journey into the world of
                  technology and business has been a thrilling adventure filled
                  with learning, challenges, and growth. Growing up in Indore,
                  India, I was always fascinated by how things work. This
                  curiosity led me to explore various fields, from tinkering
                  with electronics to diving deep into the world of computers.
                  Little did I know that this fascination would shape my career
                  and passion for technology.
                </div>
              </div>
            </motion.div>
            {/* Skills */}
            <motion.div
              variants={variants}
              initial="initial"
              whileInView="whileInView"
              viewport="viewport"
              transition={{ duration: 0.3, delay: 0.1 }}
              className="col-span-4 lg:col-span-2"
            >
              <div className="px-5 mx-auto py-7 bg-black/10 card hover:ring-purple-400 backdrop-blur-xl ring-1 ring-white rounded-xl">
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="text-2xl font-bold">Academic Foundation</div>
                  <div className="text-center capitalize text-1xl">
                    My academic journey began at Devi Ahilya Vishwavidyalaya
                    (DAVV) University, Indore, where I pursued an MBA. This
                    program was pivotal in shaping my analytical and strategic
                    thinking skills. The rigorous coursework and exposure to
                    various aspects of business management, including finance,
                    marketing, operations, and strategy, provided me with a
                    strong foundation. This knowledge has been instrumental in
                    my approach to problem-solving and decision-making, enabling
                    me to view challenges from multiple perspectives and devise
                    effective solutions.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="mt-5"
          >
            <div className="mb-2 text-3xl font-bold">The Turning Point</div>
            <div className="px-5 mx-auto py-7 bg-black/10 card hover:ring-purple-400 backdrop-blur-xl ring-1 ring-white rounded-xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-bold">
                  Discovering Web Development
                </div>
                <div className="text-center capitalize text-1xl">
                  While my MBA program equipped me with essential business
                  skills, I soon realized that my true passion lay in
                  technology. During my studies, I started exploring web
                  development and quickly became captivated by the endless
                  possibilities it offered. The ability to create interactive
                  and dynamic websites from scratch was exhilarating. This
                  newfound passion led me to dive deeper into the world of
                  coding, and I began teaching myself various programming
                  languages and frameworks.
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="mt-5"
          >
            <div className="px-5 mx-auto py-7 bg-black/10 card hover:ring-purple-400 backdrop-blur-xl ring-1 ring-white rounded-xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-bold">
                  Certification and Specialization
                </div>
                <div className="text-center capitalize text-1xl">
                  To formalize my skills and gain a competitive edge, I pursued
                  a certification in Full Stack MERN Development from 3RI
                  Technology ,Pune Maharashtra. This comprehensive program
                  covered MongoDB, Express.js, React, and Node.js, collectively
                  known as the MERN stack. This certification was a
                  game-changer, providing me with the technical expertise needed
                  to build robust and scalable web applications. It also opened
                  up new opportunities for me to work on diverse projects and
                  collaborate with other tech enthusiasts.
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="mt-5"
          >
            <div className="px-5 mx-auto py-7 bg-black/10 card hover:ring-purple-400 backdrop-blur-xl ring-1 ring-white rounded-xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-bold">
                  Launching &apos;MongoMastery&apos; with Youtube Channel
                </div>
                <div className="text-center capitalize text-1xl">
                  In June 2020, I decided to share my knowledge and passion for
                  web development with a broader audience. This led to the
                  creation of my YouTube channel, &apos;MongoMastery&apos;. The
                  channel&apos;s mission is to educate and inspire aspiring
                  developers by providing comprehensive tutorials and insights
                  into full stack development. Over time,
                  &apos;MongoMastery&apos; has grown into a vibrant community
                  with over 3,600 subscribers and more than 1.5 million views.
                  The positive feedback and engagement from my audience have
                  been incredibly rewarding and motivating.
                </div>
              </div>
            </div>
          </motion.div>
          {/* Skills and Expertise */}
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="mt-5"
          >
            <div className="px-5 mx-auto py-7 bg-black/10 card hover:ring-purple-400 backdrop-blur-xl ring-1 ring-white rounded-xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-bold">Skills and Expertise</div>
                <div className="capitalize text-1xl">
                  <div>
                    My journey as a developer has equipped me with a diverse set
                    of skills, which I continually refine and expand. Here are
                    some of the key areas of my expertise:
                  </div>
                  <div>
                    <div>
                      <h2 className="text-xl font-bold mt-7">
                        Frontend Development
                      </h2>
                      <ul className="flex flex-col gap-4 pl-12 mt-5 list-decimal ">
                        <li className="list-item">
                          <span className="font-semibold">React:</span> My
                          proficiency in React allows me to build dynamic and
                          responsive user interfaces. I leverage React&apos;s
                          component-based architecture to create modular and
                          maintainable code. By utilizing hooks, the context
                          API, and state management libraries like Redux, I can
                          develop complex applications with ease.
                        </li>
                        <li className="list-item">
                          <span className="font-semibold">Javascript:</span>
                          Advanced JavaScript concepts, such as closures,
                          asynchronous programming, and functional programming,
                          are second nature to me. This deep understanding
                          enables me to write efficient and maintainable code,
                          solve complex problems, and optimize application
                          performance.
                        </li>
                        <li className="list-item">
                          <span className="font-semibold">CSS :</span> I I have
                          a strong command over CSS for styling web pages,
                          including the use of preprocessors like SASS and
                          methodologies like BEM (Block Element Modifier) to
                          write scalable and maintainable styles.
                        </li>
                        <li className="list-item">
                          <span className="font-semibold">
                            Tailwind CSS & Daisy UI:
                          </span>
                          My proficiency in React allows me to build dynamic and
                          responsive user interfaces. I leverage React&apos;s
                          component-based architecture to create modular and
                          maintainable code. By utilizing hooks, the context
                          API, and state management libraries like Redux, I can
                          develop complex applications with ease.
                        </li>
                        <li className="list-item">
                          <span className="font-semibold">Bootstrap:</span>My
                          experience with Bootstrap allows me to create
                          responsive and mobile-first designs rapidly. Its
                          extensive library of components and utilities is
                          invaluable for streamlining the development process.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mt-7">
                        Backend Development
                      </h2>
                      <ul className="flex flex-col gap-4 pl-12 mt-5 list-decimal ">
                        <li className="list-item">
                          <span className="font-semibold">Node.js:</span> My
                          proficiency in Node.js enables me to build scalable
                          server-side applications. I have experience in using
                          various Node.js frameworks and libraries to develop
                          robust backend systems that support high-traffic web
                          applications.
                        </li>
                        <li className="list-item">
                          <span className="font-semibold">Express.js:</span>I
                          use Express.js to develop RESTful APIs and server-side
                          logic, ensuring efficient data handling and
                          communication. This framework is essential for
                          building robust backend systems that can handle large
                          volumes of data and complex queries.
                        </li>
                        <li className="list-item">
                          <span className="font-semibold">MongoDb:</span> I My
                          expertise in MongoDB includes designing efficient
                          database schemas, managing collections, and performing
                          CRUD operations. This knowledge allows me to handle
                          large volumes of data and ensure data integrity and
                          performance.
                        </li>
                        <li className="list-item">
                          <span className="font-semibold">Pug:</span>I use Pug
                          (formerly Jade) for server-side templating, enabling
                          dynamic content rendering. This approach improves the
                          efficiency of rendering web pages and enhances the
                          user experience by delivering personalized content
                          quickly.
                        </li>
                        <li className="list-item">
                          <span className="font-semibold">
                            Server Management:
                          </span>
                          My proficiency in managing servers on Ubuntu ensures
                          optimal performance, security, and reliability. This
                          includes tasks such as configuring servers, monitoring
                          performance, and implementing security measures.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* #################### Advanced JavaScript and Full Stack Development ############### */}
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="mt-5"
          >
            <div className="px-5 mx-auto py-7 bg-black/10 card hover:ring-purple-400 backdrop-blur-xl ring-1 ring-white rounded-xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-bold">
                  Advanced JavaScript and Full Stack Development
                </div>
                <div className="text-center capitalize text-1xl">
                  My deep understanding of advanced JavaScript concepts is
                  crucial for full stack development. This knowledge enables me
                  to build comprehensive web applications that are both
                  efficient and maintainable. By combining my frontend and
                  backend skills, I can develop end-to-end solutions that meet
                  the needs of users and businesses alike.
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Real-world Projects</h1>
                <h4 className="mt-3 border-b">
                  Throughout my journey, I have worked on various projects that
                  demonstrate my skills and expertise. Here are some notable
                  examples:
                </h4>
                <ul className="flex flex-col gap-4 pl-12 mt-5 list-decimal">
                  <li className="list-item">
                    <span className="font-semibold">E-commerce Platform:</span>I
                    developed a full-fledged e-commerce platform using the MERN
                    stack. The platform includes features like user
                    authentication, product management, shopping cart
                    functionality, and order processing. The responsive design,
                    secure payment gateway integration, and intuitive user
                    interface showcase my ability to handle both frontend and
                    backend development.
                  </li>
                  <li className="list-item">
                    <span className="font-semibold">Blogging Application:</span>
                    I created a dynamic blogging application where users can
                    create, edit, and delete posts. The application includes
                    user authentication, rich text editing, and a commenting
                    system. This project highlights my skills in full stack
                    development and my ability to create feature-rich web
                    applications.
                  </li>
                  <li className="list-item">
                    <span className="font-semibold">
                      Real-time Chat Application:
                    </span>
                    I built a real-time chat application using Node.js, Express,
                    and Socket.io. The application supports private messaging,
                    group chats, and user presence indicators. This project
                    demonstrates my expertise in real-time web technologies and
                    my ability to build interactive applications.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="mt-5"
          >
            <div className="px-5 mx-auto py-7 bg-black/10 card hover:ring-purple-400 backdrop-blur-xl ring-1 ring-white rounded-xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-bold">
                  The Impact of &apos;MongoMastery&apos;
                </div>
                <div className="text-center capitalize text-1xl">
                  &apos;MongoMastery&apos; has become more than just a YouTube
                  channel; it is a community of learners and enthusiasts who
                  share a passion for web development. Through my videos, I aim
                  to break down complex concepts into digestible and practical
                  tutorials that can help aspiring developers at all levels. The
                  channel covers a wide range of topics, including:
                </div>
              </div>
              <div className="pl-12 mt-5">
                <ul className="flex flex-col gap-4 list-disc">
                  <li className="list-item">
                    <span className="font-semibold">React :</span> From basic
                    tutorials to advanced topics like hooks, context API, and
                    state management.
                  </li>
                  <li className="list-item">
                    <span className="font-semibold">Node.js and Express :</span>
                    Building RESTful APIs, handling middleware, and integrating
                    databases.
                  </li>
                  <li className="list-item">
                    <span className="font-semibold">MongoDB :</span> Designing
                    schemas, managing collections, and performing CRUD
                    operations.
                  </li>
                  <li className="list-item">
                    <span className="font-semibold">
                      Tailwind CSS & Daisy UI Or Bootstrap :{" "}
                    </span>
                    Creating responsive and visually appealing designs.
                  </li>
                  <li className="list-item">
                    <span className="font-semibold">Server Management : </span>
                    Configuring and managing servers on Ubuntu for optimal
                    performance and security.
                  </li>
                </ul>
              </div>
              <h4 className="mt-5">
                The positive feedback and engagement from my audience have been
                incredibly rewarding. Seeing the impact of my content on their
                learning journey motivates me to continue creating high-quality
                tutorials and expanding the channel&apos;s offerings.
              </h4>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="mt-5"
          >
            <div className="px-5 mx-auto py-7 bg-black/10 card hover:ring-purple-400 backdrop-blur-xl ring-1 ring-white rounded-xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-semibold">Future Aspirations</div>
                <div>
                  As I continue my journey, I have several goals and
                  aspirations:
                </div>
                <ul className="list-decimal">
                  <div className="flex flex-col gap-5 pl-12">
                    <li className="list-item">
                      <span className="font-bold">
                        Expand My Technical Expertise:
                      </span>
                      I aim to delve deeper into emerging technologies such as
                      artificial intelligence (AI), machine learning (ML), and
                      blockchain. By staying updated with the latest trends, I
                      can continue to innovate and create cutting-edge
                      solutions.
                    </li>
                    <li className="list-item">
                      <span className="font-bold">
                        Lead Innovative Projects:
                      </span>
                      My long-term goal is to lead projects that make a
                      significant impact. Whether it&apos;s developing a
                      groundbreaking application or contributing to an
                      open-source initiative, I want to use my skills to drive
                      positive change in the tech industry.
                    </li>
                    <li className="list-item">
                      <span className="font-bold">Mentor and Educate:</span>I I
                      am passionate about sharing my knowledge and helping
                      others grow. I plan to continue expanding &apos;Full Stack
                      Hero &apos; and explore other avenues for mentoring and
                      educating aspiring developers, such as workshops,
                      webinars, and online courses.
                    </li>
                    <li className="list-item">
                      <span className="font-bold">
                        Build a Strong Professional Network:
                      </span>
                      Networking is essential for growth and collaboration. I
                      aim to connect with like-minded professionals and
                      enthusiasts, fostering relationships that can lead to new
                      opportunities and insights.
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="mt-5"
          >
            <div className="px-5 mx-auto py-7 bg-black/10 card hover:ring-purple-400 backdrop-blur-md ring-1 ring-white rounded-xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-bold">Personal Philosophy</div>
                <div className="text-center capitalize text-1xl">
                  <span>
                    I believe in the power of continuous learning and the
                    importance of giving back to the community. Throughout my
                    journey, I have learned that the tech industry is
                    ever-evolving, and staying updated is crucial. By
                    continuously expanding my knowledge and skills, I can remain
                    at the forefront of innovation and contribute effectively to
                    the field.
                  </span>
                  <span className="mt-5">
                    Moreover, I am committed to helping others on their learning
                    journey. Whether it&apos;s through my YouTube channel,
                    mentoring, or collaborating on projects, I strive to create
                    a positive impact and empower others to achieve their goals.
                    I am motivated by the desire to create innovative solutions
                    that make a difference and to inspire others to pursue their
                    passions.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="mt-5"
          >
            <div className="px-5 mx-auto py-7 bg-black/10 card hover:ring-purple-400 backdrop-blur-md ring-1 ring-white rounded-xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-bold">Let&apos;s Connect</div>
                <div className="text-center capitalize text-1xl">
                  <span>
                    I am always open to connecting with like-minded
                    professionals and enthusiasts. Whether you want to
                    collaborate on a project, seek mentorship, or simply discuss
                    web development, I am here to connect and engage. Feel free
                    to reach out to me on
                    <a
                      className="text-blue-400"
                      href="www.linkedin.com/in/gautam-prajapat-mern-developer"
                      title="LinkedIn Profile"
                    >
                      &nbsp;LinkedIn&nbsp;
                    </a>
                    or send me an email at
                    <a
                      className="text-blue-400"
                      href="mailto:goutamprajapat554@gmail.com"
                    >
                      &nbsp;goutamprajapat554@gmail.com&nbsp;
                    </a>
                    .
                  </span>
                  <span className="mt-5">
                    Don&apos;t forget to check out my projects and subscribe to
                    &apos;MongoMastery&apos; on YouTube for the latest web
                    development tutorials and insights!
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="mt-5"
          >
            <div className="px-5 mx-auto bg-transparent py-7 card hover:ring-purple-400 backdrop-blur-md ring-1 ring-white rounded-xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-bold">Final Thoughts</div>
                <div className="text-center capitalize text-1xl">
                  <span>
                    My journey as a full stack developer and educator has been
                    incredibly fulfilling. From my early beginnings to launching
                    &apos;MongoMastery&apos;, I have continuously sought to
                    learn, innovate, and share my knowledge with others. As I
                    look to the future, I am excited about the opportunities
                    that lie ahead and the potential to make a lasting impact in
                    the tech industry.
                  </span>
                  <span className="mt-5">Thank you for</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default About;
