import React from 'react';
import './Blogs.css'
import context from '../../Images/react-context-api.png'
import semantic from '../../Images/HTML5-Semantic-Elem jpg.jpg'

const Blogs = () => {
    return (
        <div className='container blogs-info'>
            <div className='context-info d-flex'>
                <img src={context} alt="" srcset="" />
                <div>
                    <h3>What is Context API ?</h3>
                    <p>the Context API helps to avoid prop drilling in our React application. if you don't know about the term prop drilling. So let's understand that first. ________________

                    In React, we can pass the data only in a single direction, i.e. from top to down (parent to child) via props. Prop drilling is a process where we need to pass down the props at each level in a deeply nested component tree so that we can access them in the component at the lowest level.

                    Context in React just provides a way to pass the data directly to the required components rather than passing them through every level of the component tree. So using React Context, we don't have to pass the props unnecessarily to all those intermediate components that do not need the props.</p>
                </div>
            </div>
            <div className='context-info d-flex'>
                <img src={semantic} alt="" srcset="" />
                <div>
                    <h3>What Is Semantic HTML Tag ?</h3>
                    <p>Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain.For example, header, Footer, article are considered semantic elements as they clearly describe their purpose and the type of content they should enclose.

                    Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;