import React from 'react'

function NewsItem (props) {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right: '0'}}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://yt3.googleusercontent.com/vZFILuFswtjUIU5oRCc79rxRdML5A_c-D_6AdvgAAd0hqSrJihyJFkT_CTSjYwSrHgiPAAozebY=s900-c-k-c0x00ffffff-no-rj" : imageUrl} className="card-img-top" alt="..." style={!imageUrl ? { height: "35vh" } : {}} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem