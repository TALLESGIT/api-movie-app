import Category from '../models/category.js';

export const getCategories = async (req, res) => {
    const categories = await Category.find();

    return res.status(200).json(categories);
};

export const createCategory = async (req, res) => {
    const category = req.body;

    const newCategory = await Category.create(category);
    return res.status(201).json(newCategory);
};

export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    await Category.findByIdAndDelete({ _id: id });

    return res.status(200).json({ response: 'Category deleted' });
};

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const updateCategory = req.body;

<<<<<<< HEAD
    await Category.findByIdAndUpdate({ _id: id }, updateCategory, {
        new: true,
    });
=======
    await Movie.findByIdAndUpdate({ _id: id }, updateCategory, { new: true });
>>>>>>> f7f27e85d12350900f761058792abce217bfdf65

    return res.status(201).json({ response: 'Category updated' });
};
