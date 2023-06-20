export const SortTitle = (props) => {
    const string = props;
    const title = string?.slice(0, 18)
    return title + '...';
}