class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save!
      render :show
    else
      render json: @comment.errors.full_messages
    end
  end

  def index
    @comments = Comment.all
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def destroy
    @comment= Comment.find(params[:id])
    if @comment
      @comment.destroy
      render json: {}
    else
      render json: ['Comment not found.'], status: 409
    end
  end

  def update 
    @comment = Comment.find(params[:id]))
    if @comment
      @comment[:content] = comment_params[:content] || @comment[:content]
      @comment[:user_id] = comment_params[:user_id] || @comment[:user_id]
      @comment[:song_id] = comment_params[:song_id] || @comment[:song_id]
    else
      render json: @comment.errors.full_messages, status: 468
    end
  end


  private
  def comment_params
    params.require(:comment).permit(:content, :user_id, :song_id)
  end

end