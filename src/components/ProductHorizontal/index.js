import React from 'react'
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Config } from '@common'
import StarRating from "react-native-star-rating"

class ProductHorizontal extends React.PureComponent {
  render() {
    const { product } = this.props
    let image = ''
    if (product.images && product.images.length > 0) {
      image = product.images[0].src
    }
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.75}>
        <ImageBackground source={{ uri: image }} style={styles.image} resizeMode="contain"></ImageBackground>
        <View style={styles.content}>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{Config.currencySymbol}{product.price}</Text>
            {product.regular_price != product.price && (
              <Text style={styles.regular_price}>
                {Config.currencySymbol + product.regular_price}
              </Text>
            )}
          </View>
          <View style={styles.star}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={product.rating_count}
              starSize={15}
              fullStarColor="#f6cd45"
              halfStarColor="#f6cd45"
              emptyStarColor="#f6cd45"
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default ProductHorizontal