<script lang="ts" setup>
const { status, data } = useAuth()
</script>

<template>
  <p>
    <span>Status:</span>
    <span data-testid="status">
      {{ status }}
    </span>
  </p>
  <p>
    <span>Name:</span>
    <span data-testid="name">
      {{ data?.user?.name || 'N/A' }}
    </span>
  </p>
  <p>
    <span>Email:</span>
    <span data-testid="email">
      {{ data?.user?.email || 'N/A' }}
    </span>
  </p>
  <p>
    <span>Role:</span>
    <span data-testid="role">
      {{ data?.user?.role || 'N/A' }}
    </span>
  </p>
</template>
