import React from 'react';
import './Post.css';

const Post = ({post:{title, img, body, author}, i}) =>
(
<div className="post-container">
<h1 className="heading">{title}</h1>
<img className="image" src={img} alt="post" />
<p>{body}</p>
<div className="info">
<h5>Article Number: {i + 1} </h5>
<h4>written by: {author}</h4>
</div>
</div>

);

export default Post;