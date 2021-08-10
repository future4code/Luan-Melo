import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [comment, setComment] = useState(0)
  const [commentClick, setCommentClick] = useState(false)
  const [like, setLike] = useState(false)
  const [likeMore, setLikeMore] = useState(0)

  const onClickCurtida = () => {
    if (like) {
      setLike(false)
      setLikeMore(0)
    } else {
      setLike(true)
      setLikeMore(1)
    }
  };

  let iconeCurtida
  if (like) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  const onClickComentario = () => {
    setCommentClick(!commentClick)
  };

  const enviarComentario = (comentario) => {
    setComment(comment + 1)
  }

  let componenteComentario
  if (comment) {
    componenteComentario = <SecaoComentario aoEnviar={enviarComentario} />
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={likeMore}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
        // valorContador={numeroComentarios}
        />
      </PostFooter>
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
}

export default Post