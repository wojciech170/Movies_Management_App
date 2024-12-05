import {connect} from 'react-redux';
import MovieSearch from "../components/MovieSearch";
import {fetchMovies} from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);