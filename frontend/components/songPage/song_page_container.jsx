import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import SongPage from './song_page'
import {fetchSong} from '../../actions/song_actions';
import {createComment} from '../../actions/comment_actions'
import {printHowLongAgo} from '../../util/misc_utils';


const mapStateToProps = (state) =>{
  return {
    currentUserId: state.session.id,//state.entities.users[state.session.id],
    songs: state.entities.songs,
    comments: state.entities.comments,
    printHowLongAgo
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    fetchSong: (id)=>{dispatch(fetchSong(id))},
    createComment: (comment)=>{dispatch(createComment(comment))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongPage));