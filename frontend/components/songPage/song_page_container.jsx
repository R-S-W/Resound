import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import SongPage from './song_page'
import {fetchSong} from '../../actions/song_actions';
import {createComment, fetchSongComments, deleteComment} from '../../actions/comment_actions'
import {printHowLongAgo} from '../../util/misc_utils';


const mapStateToProps = (state) =>{
  return {
    currentUserId: state.session.id,//state.entities.users[state.session.id],
    username: state.entities.users[state.session.id]?.username,
    songs: state.entities.songs,
    comments: state.entities.comments,
    printHowLongAgo
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    fetchSong: (id)=>{dispatch(fetchSong(id))},
    createComment: (comment)=>{dispatch(createComment(comment))},
    fetchSongComments: (songId)=>{dispatch(fetchSongComments(songId))},
    deleteComment: (commentId, songId)=>{dispatch(deleteComment(commentId,songId))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongPage));