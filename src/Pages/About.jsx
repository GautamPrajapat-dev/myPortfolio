const About = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-4xl mt-[3%] text-center underline underline-offset-2">
          About Us
        </div>

        <div className="w-3/4 mx-auto mt-12">
          <div className="mb-2 text-3xl font-bold ">Who Am I ?</div>
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-2 px-5 mx-auto py-7 bg-black/10 card backdrop-blur-3xl ring-1 ring-white rounded-xl">
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
            </div>
            {/* Skills */}
            <div className="col-span-2">
              <div className="px-5 mx-auto py-7 bg-black/10 card backdrop-blur-3xl ring-1 ring-white rounded-xl">
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
            </div>
          </div>
          <div className="mt-5">
            <div className="mb-2 text-3xl font-bold">The Turning Point</div>
            <div className="px-5 mx-auto py-7 bg-black/10 card backdrop-blur-3xl ring-1 ring-white rounded-xl">
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
          </div>
          <div className="mt-5">
            <div className="px-5 mx-auto py-7 bg-black/10 card backdrop-blur-3xl ring-1 ring-white rounded-xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-bold">
                  Certification and Specialization
                </div>
                <div className="text-center capitalize text-1xl">
                  To formalize my skills and gain a competitive edge, I pursued
                  a certification in Full Stack MERN Development from 3RIT
                  Technology. This comprehensive program covered MongoDB,
                  Express.js, React, and Node.js, collectively known as the MERN
                  stack. This certification was a game-changer, providing me
                  with the technical expertise needed to build robust and
                  scalable web applications. It also opened up new opportunities
                  for me to work on diverse projects and collaborate with other
                  tech enthusiasts.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="px-5 mx-auto py-7 bg-black/10 card backdrop-blur-3xl ring-1 ring-white rounded-xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-bold">
                  Launching 'MongoMastery' with Youtube Channel
                </div>
                <div className="text-center capitalize text-1xl">
                  In June 2020, I decided to share my knowledge and passion for
                  web development with a broader audience. This led to the
                  creation of my YouTube channel, 'MongoMastery.' The channel's
                  mission is to educate and inspire aspiring developers by
                  providing comprehensive tutorials and insights into full stack
                  development. Over time, 'MongoMastery' has grown into a
                  vibrant community with over 3,600 subscribers and more than
                  1.5 million views. The positive feedback and engagement from
                  my audience have been incredibly rewarding and motivating.
                </div>
              </div>
            </div>
          </div>
          {/* Skills and Expertise */}
          <div className="mt-5">
            <div className="px-5 mx-auto py-7 bg-black/10 card backdrop-blur-3xl ring-1 ring-white rounded-xl">
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
                          responsive user interfaces. I leverage React's
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
                          responsive user interfaces. I leverage React's
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
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
