import PropTypes from 'prop-types';
const Category = ({category}) => {
    return (
        <div className='bg-gradient-to-r from-blue-100 to-purple-400  p-10 rounded-md'>
            <img src={category.logo} alt="" />
            <h1 className='font-bold my-2'>{category.category_name}</h1>
            <h1>{category.availability}</h1>
        </div>
    );
};

Category.propTypes={
    category: PropTypes.object.isRequired
}
export default Category;