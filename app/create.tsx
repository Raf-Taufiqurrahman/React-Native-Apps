import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";
import { Button, ButtonText } from "@/components/ui/button";
import { useCreateUserMutation } from "@/services/api";
import { useRouter, Link } from "expo-router";
import { Icon, ArrowLeftIcon } from "@/components/ui/icon";

type FormData = {
  name: string;
  email: string;
  gender: string;
  departement: string;
  image: string;
};

type Errors = {
  [K in keyof FormData]: string;
};

const initialErrors: Errors = {
  name: "",
  email: "",
  gender: "",
  departement: "",
  image: "",
};

export default function create() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    gender: "",
    departement: "",
    image: "",
  });

  const [errors, setErrors] = useState<Errors>(initialErrors);
  const router = useRouter();
  const [createUser, { isLoading }] = useCreateUserMutation();

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = { ...initialErrors };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }
    if (!formData.departement) {
      newErrors.departement = "Department is required";
      isValid = false;
    }
    if (!formData.image.trim()) {
      newErrors.image = "Image URL is required";
      isValid = false;
    } else if (!/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i.test(formData.image)) {
      newErrors.image = "Image URL is invalid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      await createUser(formData).unwrap();
      Alert.alert("Success", "User created successfully!");
      setFormData({
        name: "",
        email: "",
        gender: "",
        departement: "",
        image: "",
      });
      setErrors(initialErrors);
      router.push("/");
    } catch {
      Alert.alert("Error", "Failed to create user. Please try again.");
    }
  };

  const renderInput = (
    label: string,
    field: keyof FormData,
    placeholder: string,
    type: string = "text"
  ) => (
    <View className="mb-4">
      <FormControlLabel>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <Input className="bg-white rounded-lg border-gray-200">
        <InputField
          type={type as "text"}
          placeholder={placeholder}
          value={formData[field]}
          onChangeText={(value) => handleChange(field, value)}
        />
      </Input>
      {errors[field] && (
        <Text className="text-red-500 text-sm mt-1">{errors[field]}</Text>
      )}
    </View>
  );

  const renderSelect = (
    label: string,
    field: keyof FormData,
    placeholder: string,
    items: { label: string; value: string }[]
  ) => (
    <View className="mb-4">
      <FormControlLabel>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <Select
        className="bg-white rounded-lg"
        selectedValue={formData[field]}
        onValueChange={(value) => handleChange(field, value)}
      >
        <SelectTrigger
          variant="outline"
          size="md"
          className="rounded-lg border-gray-200"
        >
          <SelectInput placeholder={placeholder} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {items.map(({ label, value }) => (
              <SelectItem key={value} label={label} value={value} />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
      {errors[field] && (
        <Text className="text-red-500 text-sm mt-1">{errors[field]}</Text>
      )}
    </View>
  );

  return (
    <SafeAreaView>
      <View className="w-full flex flex-row justify-between gap-2 bg-white border-t border-b border-gray-200 px-6 py-4 items-center">
        <Link href="/" className="rounded-full bg-rose-500 p-2">
          <Text>
            <Icon as={ArrowLeftIcon} className="text-white" />
          </Text>
        </Link>
        <Text className="text-xl font-bold text-center">Create New User</Text>
      </View>
      <View className="px-6 py-4">
        <FormControl>
          {renderInput("Name", "name", "Enter a full name..")}
          {renderInput("Email", "email", "Enter an email..")}
          {renderSelect("Gender", "gender", "Select gender", [
            { label: "Male", value: "MALE" },
            { label: "Female", value: "FEMALE" },
          ])}
          {renderSelect("Department", "departement", "Select department", [
            { label: "IT", value: "IT" },
            { label: "HSE", value: "HSE" },
            { label: "HRGA", value: "HRGA" },
            { label: "PRODUKSI", value: "PRODUKSI" },
            { label: "PLAN", value: "PLAN" },
          ])}
          {renderInput("Image URL", "image", "Enter an image URL..")}
            <Button
                size="md"
                variant="solid"
                action="primary"
                className="rounded-lg"
                onPress={handleSubmit}
                disabled={isLoading}
            >
              <ButtonText>{isLoading ? "Saving..." : "Submit"}</ButtonText>
            </Button>
        </FormControl>
      </View>
    </SafeAreaView>
  );
}
