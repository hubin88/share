/**
 * Created by huoban-xia on 2017/7/19.
 */

import React, { Component, PropTypes } from 'react';
import './share.scss';

export default class Share extends Component {
  static defaultProps = {
    commentList: [{
      headPic: require('../../images/Koala.jpg'),
      name: '户彬',
      latestTime: '刚刚',
      content: '评论内容',
    }, {
      headPic: require('../../images/Koala.jpg'),
      name: '户彬',
      latestTime: '刚刚',
      content: '评论内容',
    }, {
      headPic: require('../../images/Koala.jpg'),
      name: '户彬',
      latestTime: '刚刚',
      content: '评论内容',
    }, {
      headPic: require('../../images/Koala.jpg'),
      name: '户彬',
      latestTime: '刚刚',
      content: '评论内容',
    }, {
      headPic: require('../../images/Koala.jpg'),
      name: '户彬',
      latestTime: '刚刚',
      content: '评论内容',
    }],
    registerList: [{
      headPic: require('../../images/Koala.jpg'),
      name: '户彬',
      createTime: '刚刚',
      registerNum: 1,
    }, {
      headPic: require('../../images/Koala.jpg'),
      name: '户彬',
      createTime: '刚刚',
      registerNum: 1,
    }, {
      headPic: require('../../images/Koala.jpg'),
      name: '户彬',
      createTime: '刚刚',
      registerNum: 1,
    }],
  };

  constructor(props) {
    super(props);
    this.state = {
      showComment: true,
    };
  }

  changeShowComment = (flag) => {
    this.setState({
      showComment: flag,
    });
  };
  renderCommentList = (item, index) => {
    return (
      <li styleName="comment-list" key={index}>
        <div styleName="userImg">
          <img src={item.headPic} alt="" />
        </div>
        <div>
          <div styleName="user">
            <span styleName="user-nick">{item.name}</span>
            <span styleName="comment-time">{item.latestTime}</span>
          </div>
          <div styleName="comment-text">{item.content}</div>
        </div>
      </li>
    );
  };
  renderRegisterList = (item, index) =>
    <li styleName="comment-list" key={index}>
      <div styleName="userImg">
        <img src={item.headPic} alt="" />
      </div>
      <div>
        <div styleName="user">
          <span styleName="user-nick">{item.name}</span>
          <span styleName="comment-time">{item.registerNum}人</span>
        </div>
        <div styleName="comment-text">{item.createTime}</div>
      </div>
    </li>;

  render() {
    return (
      <div styleName="share">
        <div styleName="content">
          <div styleName="title">
            <div styleName="user-img">
              <img src={require('../../images/Koala.jpg')} alt="" />
            </div>
            <div styleName="name">
              <div>户彬</div>
            </div>
            <div styleName="money">
              <div>1元/人</div>
              <br />
              <div styleName="protect">交易保障</div>
            </div>
          </div>
          <div styleName="theme">
              <span
                styleName="theme-title"
              >聚会主题</span>
            <span styleName="party-state">召集中</span>
          </div>
          <div styleName="party-content">
            <div styleName="address">地点待定</div>
            <div styleName="time">
              <span>聚会时间</span>
            </div>
            <div styleName="text">暂无聚会描述~</div>
            <div styleName="photo">
            </div>
          </div>
          <div styleName="phone">
            <a href={`tel:13528716210`} />
          </div>
        </div>
        <div styleName="comment">
          <div styleName="pane">
              <span
                onTouchEnd={() => { this.changeShowComment(true); }}
                styleName={this.state.showComment ? 'active' : ''}
              >评论0</span>
            <span styleName="dividing-line">|</span>
            <span
              onTouchEnd={() => { this.changeShowComment(false); }}
              styleName={this.state.showComment ? '' : 'active'}
            >报名0</span>
          </div>
          <div styleName="pane-content">
            <ul styleName="comment-content">
              {this.state.showComment ?
                this.props.commentList.map((item, index) => this.renderCommentList(item, index)) :
                this.props.registerList.map((item, index) => this.renderRegisterList(item, index))
              }
            </ul>
          </div>
        </div>
        <div styleName="footer" className="sss">
          <div styleName="logo">
            <img src={require('../../images/logo.png')} alt="" />
          </div>
          <div styleName="louca">
            <div>楼咖</div>
            <div>同楼真实职场社区</div>
          </div>
          <div styleName="start-button">
            <button>立即启动</button>
          </div>
        </div>
      </div>
    );
  }
}
