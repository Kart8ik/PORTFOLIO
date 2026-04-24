import React from 'react'

const buildSrcSet = (entries) => {
  if (!entries) return ''
  if (typeof entries === 'string') return entries

  if (Array.isArray(entries)) {
    return entries
      .map((entry) => {
        if (typeof entry === 'string') return entry
        if (entry?.src && entry?.w) return `${entry.src} ${entry.w}w`
        if (entry?.src) return entry.src
        return ''
      })
      .filter(Boolean)
      .join(', ')
  }

  if (typeof entries === 'object') {
    if (typeof entries.srcset === 'string') return entries.srcset
    if (entries.src && entries.w) return `${entries.src} ${entries.w}w`
    if (entries.src) return entries.src
  }

  return ''
}

const OptimizedImage = ({
  src,
  alt,
  className,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  ...props
}) => {
  if (src && typeof src === 'object' && src.img) {
    const sources = src.sources ?? {}
    return (
      <picture>
        {Object.entries(sources).map(([format, entries]) => {
          const srcSet = buildSrcSet(entries)
          if (!srcSet) return null
          return <source key={format} type={`image/${format}`} srcSet={srcSet} />
        })}
        <img
          src={src.img.src}
          alt={alt}
          className={className}
          width={src.img.w}
          height={src.img.h}
          loading={loading}
          decoding={decoding}
          fetchPriority={fetchPriority}
          {...props}
        />
      </picture>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      {...props}
    />
  )
}

export default OptimizedImage
