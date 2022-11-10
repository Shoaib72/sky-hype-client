import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mb-8 text-slate-700'>Blog Section QnA</h1>
            <div className="mockup-window border bg-slate-500 mb-8">
                <div className="flex justify-center px-4 py-16 bg-base-200">
                    <div className='flex flex-col gap-5'>
                        <div className="flex w-full flex-col md:flex-row gap-3">
                            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center p-3">
                                <p className='text-xl font-bold text-slate-500 mb-3'>1. What is the difference between SQL and NoSQL?</p>
                                <p>SQL databases are primarily called<br />
                                    as Relational Databases (RDBMS); whereas<br />
                                    NoSQL database are primarily called as<br />
                                    non-relational or distributed database.
                                    <br />SQL requires you to use predefined schemas<br />
                                    to determine the structure of your data<br />
                                    before you work with it.A NoSQL database<br />
                                    has dynamic schema for unstructured data.<br />
                                    Data is stored in many ways which means<br />
                                    it can be document-oriented, column-oriented,<br />
                                    graph-based or organized as a KeyValue store.
                                </p>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center p-3">
                                <p className='text-xl font-bold text-slate-500 mb-3'>2. What is JWT, and how does it work?</p>
                                <p>
                                    JSON Web Token (JWT) is an open standard<br />
                                    (RFC 7519) for securely transmitting<br />
                                    information between parties as JSON object.<br />
                                    It is compact, readable and digitally <br />
                                    signed using a private key/ or a public <br />
                                    key pair by the Identity Provider(IdP).
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full flex-col md:flex-row gap-3">
                            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center p-3">
                                <p className='text-xl font-bold text-slate-500 mb-3'>3. What is the difference between <br />javascript and NodeJS?</p>
                                <p>
                                    JavaScript is a simple programming<br />
                                    language that can be used with any<br />
                                    browser that has the JavaScript Engine<br />
                                    installed. Node. js, on the other hand,<br />
                                    is an interpreter or execution environment<br />
                                    for the JavaScript programming language.
                                </p>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center p-3">
                                <p className='text-xl font-bold text-slate-500 mb-3'>
                                    4. How does NodeJS handle multiple <br />
                                    requests at the same time?
                                </p>
                                <p>
                                    How NodeJS handle multiple client<br />
                                    requests? NodeJS receives multiple client<br />
                                    requests and places them into EventQueue.<br />
                                    NodeJS is built with the concept of <br />
                                    event-driven architecture. NodeJS has <br />
                                    its own EventLoop which is an infinite <br />
                                    loop that receives requests and processes them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;