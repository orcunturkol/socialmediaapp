import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        
        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    res.send('This works now!');
}

export const createPost = async(req, res) => {
    const post = req.body;
    const newPosts = new PostMessage(post);

try {
        await newPosts.save();

        res.status(201).json(newPosts);
} catch (error) {
    res.status(409).json({message: error.message});
}}