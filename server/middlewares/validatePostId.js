import models, { sequelize } from '../db/models';

const validatePostId = {
    async checkPost(req, res, next) {
        const { postId } = req.body;
        await models.Posts.findAll({
            where: {
                id: postId,
            },
        }).then((data) => {
            if (data.length === 0) {
                return res.status(404).json({
                    message: 'Post not found!',
                });
            }
            if (data.length !== 0) {
                next();
            }
        });
    },

};
export default validatePostId;
