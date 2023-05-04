/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();

  return (
    <div className="flex justify-center flex-col">
      <div className="flex flex-col items-center mt-20">
        <h3 className="md:text-5xl text-4xl lg:text-7xl font-extrabold mb-7">
          Topu's Blog
        </h3>
        <hr className="border-[2.5px] rounded w-56  mb-8 border-[#ffc919] flex justify-center text-center" />
        <Pdf targetRef={ref} scale={0.55} filename="topu-blog.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="btn bg-[#ffc919] border-0 text-black hover:bg-amber-400 normal-case text-base font-bold"
            >
              Download PDF <FiDownload className="ms-1 text-2xl" />
            </button>
          )}
        </Pdf>
      </div>
      <section
        ref={ref}
        className="mt-20 md:w-10/12 lg:w-[1320px] mx-auto md:text-center text-left"
        id="quesAnsContainer"
      >
        <div className="mx-3 my-8 py-6 px-5 shadow-sm rounded-lg border">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-amber-200 font-bold rounded-full flex justify-center items-center text-amber-800 mr-3">
              1
            </div>
            <p className="text-gray-800 text-lg font-bold">
              Difference between <code>'uncontrolled'</code> and{" "}
              <code>'controlled'</code> components?
            </p>
          </div>
          <hr className="my-3" />
          <div className="flex items-center">
            <p className="mx-3 md:mx-11  text-start leading-loose tracking-wide ">
              <code className="bg-amber-50 p-1 rounded font-bold">
                'Uncontrolled'
              </code>{" "}
              components are those which does not need for its parent to
              influence it. It is managed by the DOM rather than a state. On the
              other hand,
              <code className="bg-amber-50 p-1 rounded font-bold">
                'Controlled'
              </code>{" "}
              component's value is controlled using state, and the parent
              component alter's itss behavior. Whenever a component's state
              changes due to the user writing something, the form element is
              updated with the new value. Both type of component's are used to
              render form elements. The difference is{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">
                'Controlled'
              </code>{" "}
              components can get the value whenever needed as it updates on
              change, however{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">
                'Uncontrolled'
              </code>{" "}
              components requires you to use a reference to get the value.
            </p>
          </div>
        </div>

        <div className="mx-3 my-8 py-6 px-5 shadow-sm rounded border">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-amber-200 font-bold rounded-full flex justify-center items-center text-amber-800 mr-3">
              2
            </div>
            <p className="text-gray-800 text-lg font-bold">
              How to validate <code>'React props</code> using{" "}
              <code>'PropTypes'</code>?
            </p>
          </div>
          <hr className="my-3" />
          <div className="flex items-center">
            <p className="mx-3 md:mx-11  text-start leading-loose tracking-wide ">
              Validating prop is essential as this may create bugs. Suppose I
              was expected to receive a number type via a prop to make
              calculation, however the calculation was gives not correct answer
              because the prop was a String type. So, to avoid this we could use{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">
                'prop-types'{" "}
              </code>
              library to validate props via{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">
                'PropTypes'
              </code>{" "}
              object. For example, to validate{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">'users'</code>{" "}
              prop which is a object we could use{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">
                'users : PropTypes.object'
              </code>{" "}
              to ensure that we get a object from{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">'users'</code>{" "}
              prop else we will see error in console.
              <code className="bg-amber-50 p-1 rounded font-bold">
                'useRef()'
              </code>{" "}
              is a hook of react and it lets you create a reference of things
              that are mutual or subject to change but the change or update
              would not cause and re-render.
            </p>
          </div>
        </div>

        <div className="mx-3 my-8 py-6 px-5 shadow-sm rounded border">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-amber-200 font-bold rounded-full flex justify-center items-center text-amber-800 mr-3">
              3
            </div>
            <p className="text-gray-800 text-lg font-bold">
              Difference between <code>'nodeJs'</code> and{" "}
              <code>'expressJs'</code>?
            </p>
          </div>
          <hr className="my-3" />
          <div className="flex items-center">
            <p className="mx-3 md:mx-11  text-start leading-loose tracking-wide ">
              <code className="bg-amber-50 p-1 rounded font-bold">
                'Node.js'
              </code>{" "}
              is a runtime environment that we use to run{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">
                'JavaScript'
              </code>{" "}
              code in the server side. Whereas,{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">
                'Express.js'
              </code>{" "}
              is a web framework for{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">
                'Node.js'
              </code>{" "}
              for better processing HTTP requests, responses, API calls,
              routing, etc. on the server-side.
            </p>
          </div>
        </div>

        <div className="mx-3 my-8 py-6 px-5 shadow-sm rounded-lg border">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-amber-200 font-bold rounded-full flex justify-center items-center text-amber-800 mr-3">
              4
            </div>
            <p className="text-gray-800 text-lg font-bold">
              What is <code>'custom hook'</code>, why will you create a custom
              hook?
            </p>
          </div>
          <hr className="my-3" />
          <div className="flex items-center">
            <p className="mx-3 md:mx-11  text-start leading-loose tracking-wide ">
              <code className="bg-amber-50 p-1 rounded font-bold">
                'Custom hook'
              </code>
              as the name suggests a custom built hook for any personal use to
              serve special need. This is a great way to make the code less
              clutured where the same task or hook is being used numerous times.
              For example, when we try to load data from a API, we use{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">
                'useState()'
              </code>{" "}
              and{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">
                'useEffect()'
              </code>{" "}
              and inside the{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">
                'useEffect()'
              </code>{" "}
              we use fetch to grab the data and set it to the state. In
              addition, we can make a lot of API calls throughout an
              application. So, to minimize the use of same code we can make our
              own hook to meet our need. We could just pass the url to the{" "}
              <code className="bg-amber-50 p-1 rounded font-bold">
                'custom hook'
              </code>{" "}
              and get the data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
